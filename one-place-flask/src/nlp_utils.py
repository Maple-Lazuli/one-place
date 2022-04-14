import spacy

nlp = spacy.load("en_core_web_lg")
import numpy as np
import random
import math
from string import ascii_uppercase
import re


# Functions for processing:
def get_angle(vector_1, vector_2):
    unit_vector_1 = np.linalg.norm(vector_1)
    unit_vector_2 = np.linalg.norm(vector_2)
    dot_product = np.dot(vector_1, vector_2)
    angle = (dot_product) / (unit_vector_1 * unit_vector_2)
    return angle


def order_similarity(x, compare_list):
    x_vector = x.vector
    rtn_list = [(y, get_angle(x_vector, y.vector)) for y in compare_list]
    rtn_list.sort(key=lambda x: x[1], reverse=True)
    return rtn_list


def test_word(word):
    dep = str(word.dep_)
    if dep.find("nsubj") != -1:
        return random.randint(0, 2) == 1
    elif dep.find("obj") != -1:
        return random.randint(0, 3) == 1
    elif dep.find("attr") != -1:
        return random.randint(0, 8) == 1
    elif dep.find("amod") != -1:
        return random.randint(0, 9) == 1
    return random.randint(0, 31) == 1


def make_questions_from_page(page, page_list):
    # remove markdown embeddings:
    link_pattern = r"!\[image\]\(http://[\S]*:3001/images\?image=[\S]{64}\)"
    latex_pattern = r"\$[\S]*\$"
    markdown_pattern = r"[#*_]*"
    replacement = ""
    page = re.sub(link_pattern, replacement, page)
    page = re.sub(latex_pattern, replacement, page)
    page = re.sub(markdown_pattern, replacement, page)
    page = page.replace("\n\n", "")

    # get the sentences from the page
    page = nlp(page)
    page_sentences = [sent for sent in page.sents]

    # the minimum number of questions
    minumum_num_questions = min(max(math.ceil(len(page_sentences) / 100), 1), 15)

    # Find the next five most similar pages
    page_list = [re.sub(link_pattern, replacement, p) for p in page_list]
    page_list = [re.sub(latex_pattern, replacement, p) for p in page_list]
    page_list = [re.sub(markdown_pattern, replacement, p) for p in page_list]
    page_list = [p.replace("\n", "") for p in page_list]

    excluded_page_list = [nlp(p) for p in page_list]
    five_similar_pages = order_similarity(page, excluded_page_list)[:5]
    five_similar_pages = [p[0] for p in five_similar_pages]  # Unpack the tuple

    # create the word bag to build the wordbank from
    word_bag_set = set()
    for sentence in excluded_page_list + [page]:
        for word in sentence:
            if word.is_stop or len(word.text) < 3:
                continue
            word_bag_set.add(word.text.lower())

    word_bag = [nlp(word)[0] for word in word_bag_set]

    # list to hold the questions to return.
    questions = []

    question_count = 0
    while question_count < minumum_num_questions:

        for sentence in page_sentences:

            # A list of words to strip and make questions from
            question_bank_list = []
            last_idx = -7
            for idx, word in enumerate(sentence):
                # prevent multiple blanks in a row
                if word.is_stop or len(word.text) < 6:
                    continue
                if test_word(word) and ((idx - last_idx) >= 7):
                    last_idx = idx
                    # make sure the test word is not in the word bag
                    excluded_word_bag = [w for w in word_bag if w.text.lower() != word.text.lower()]

                    # create the word bank from similar words and ensure no duplicates
                    similiar_words = order_similarity(word, excluded_word_bag)
                    word_bank = []
                    lem_bank = [str(word.lemma_).lower()]

                    for w, score in similiar_words:

                        if str(w.lemma_).lower() not in lem_bank:
                            lem_bank.append(str(w.lemma_).lower())
                            word_bank.append(w.text)
                        if len(word_bank) > 4:
                            break

                    # add the answer to the word bank
                    word_bank.append(word.text)

                    random.shuffle(word_bank)
                    question = dict()
                    question["word_bank"] = word_bank
                    question['answer_idx'] = word_bank.index(word.text)
                    question['answer'] = word.text
                    question_bank_list.append(question)

            # for each word bank, strip words from the sentence and build a question dictionary
            if len(question_bank_list) != 0:
                question_count += 1
                blank_sent = str(sentence)
                for idx, question in enumerate(question_bank_list):
                    blank_sent = blank_sent.replace(question['answer'], f"({idx + 1}){'_' * 5}", 1)

                question_dict = {
                    "original_sentence": str(sentence),
                    "blank_sentence": blank_sent,
                    "question_banks": question_bank_list
                }
                questions.append(question_dict)

    def print_question(question):
        print(question['blank_sentence'])
        for idx, wb in enumerate(question['question_banks']):
            print(f"Blank: {idx + 1}")
            for i, w in enumerate(wb['word_bank']):
                print(f"\t{ascii_uppercase[i]}: {w}")
        print("\n")

    return questions


if __name__ == "__main__":
    page1 = "In Of Mice and Men, it seems an incontrovertible law of nature that dreams should go unfulfilled. From George and Lennie’s ranch to Curley’s wife’s stardom, the characters’ most cherished aspirations repeatedly fail to materialize. However, the fact that they do dream—often long after the possibility of realizing those dreams has vanished—suggests that dreaming serves a purpose in their lives. What the characters ultimately fail to see is that, in Steinbeck’s harsh world, dreams are not only a source of happiness but a source of misery as well."
    page2 = "For the characters in Of Mice and Men, dreams are useful because they map out the possibilities of human happiness. Just as a map helps a traveler locate himself on the road, dreams help Lennie, George, and the others understand where they are and where they’re going. Many dreams in the work have a physical dimension: Not just wishes to be achieved, they are places to be reached. The fact that George’s ranch, the central dream of the book, is an actual place as opposed to a person or a thing underlines this geographical element. Dreams turn the characters’ otherwise meandering lives into journeys with a purpose, as they take pride in actions that support the achievement of their dreams and reject actions that do not. Having a destination gives the men’s lives meaning. Indeed, when others begin to believe in the dream-space that George has created, it becomes almost realer to them than the farm they work at, a phenomenon illustrated by Candy’s constant “figuring” about how to make good on their fantasy."
    page3 = "Dreams help the characters feel like more active participants in their own lives because they allow them to believe that the choices they make can have real, tangible benefits. They also help characters cope with misery and hardship, keeping them from succumbing to the difficulties they face regularly. In their darkest moments, George and Lennie invoke their ranch like a spell that can temper their daily sufferings and injustices. George and Lennie almost always fantasize about the ranch after some traumatic event or at the end of a long day, suggesting that they rely on their dreams as a kind of salve. The dream of the ranch offers George, Lennie, Candy, and the others a goal to work toward as well as the inspiration to keep struggling when things seem grim."
    page4 = "But by the end of the story, Steinbeck reveals that dreams can be as poisonous as they are beneficial. What George discovers—and what Crooks already seems to know when he scornfully spurns Candy’s offer to join him, Lennie, and George—is that dreams are too often merely an articulation of what never can be. In such cases, dreams become a source of intense bitterness because they seduce cynical men to believe in them and then mock those men for their gullibility. The workers’ love of Western magazines suggests just such a relationship to dreams: Each one scoffs at the magazines in public but manages to sneak furtive glances when no one else is looking, as if they secretly wanted to be the cowboy heroes of pulp fiction. No one seems to understand this bitterness better than Crooks, whose sullen self-loathing is never stronger than when he lets himself believe in Lennie’s dream, only to be brutally reminded by Curley’s wife that he is not entitled to happiness in a white man’s world."
    page5 = "Ultimately, the dreams of ranches and rabbits that George and Lennie treasure are the very things that undo them. Seduced by how close he thinks he is to realizing his dream, George fools himself into thinking that Lennie can mind himself and stay out of trouble when past events confirm the contrary. In the end, George does not despair at Lennie’s death because the ranch is forever lost to him, but rather because his friend—the one good reality of his life, the one reality that redeemed George from worthlessness—is forever lost to him."
    questions = make_questions_from_page(page1, [page2, page3, page4, page5])

    print(questions[0])
