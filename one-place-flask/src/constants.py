project_dict = {
    "title": None,
    "purpose": None,
    "category": None,
    "content": None,
    "creation_date": None,
    "id": None,
    "pages": dict(),
    "files": dict(),
}

page_dict = {
    "title": None,
    "position": 0,
    "creation_date": None,
    "last_render": 0,
    "id": None,
    "content": None,
    "lastUpdate": 0,
    "pages": dict(),
    "code_snippets": dict(),
    "writings": dict(),
    "last_review": 0,
    "score": 0,
    "editor": ""
}

writing_dict = {
    "id": None,
    "title": None,
    "image_name": "None",
    "save_data": "",
    "creation_date": 0
}

code_snippets_dict = {
    "title": None,
    "description": None,
    "id": None,
    "raw": None,
    "marked": None,
    "language": None,
    "creation_date": 0
}

files_dict = {
    "title": None,
    "description": None,
    "upload_date": 0,
    "id": None,
    "file_name": None,
    "original_file_name": None
}
data_path = '../data/v1/'
v1_name = "content.pkl"
images = data_path + "images/"
files = data_path + "files/"
backups = '../data/backups/'
review_list = "../data/review_content/review.txt"
