import os

def normalize_name(name):
    """
    Convert name to lowercase and replace spaces with hyphens.
    """
    return name.lower().replace(" ", "-")


def rename_items(root_path):
    # Walk from bottom to top so subfolders/files are renamed first
    for current_root, dirs, files in os.walk(root_path, topdown=False):

        # Rename files
        for file_name in files:
            old_path = os.path.join(current_root, file_name)

            new_name = normalize_name(file_name)
            new_path = os.path.join(current_root, new_name)

            if old_path != new_path:
                try:
                    os.rename(old_path, new_path)
                    print(f"FILE : {old_path} -> {new_path}")
                except Exception as e:
                    print(f"Failed to rename file {old_path}: {e}")

        # Rename directories
        for dir_name in dirs:
            old_path = os.path.join(current_root, dir_name)

            new_name = normalize_name(dir_name)
            new_path = os.path.join(current_root, new_name)

            if old_path != new_path:
                try:
                    os.rename(old_path, new_path)
                    print(f"DIR  : {old_path} -> {new_path}")
                except Exception as e:
                    print(f"Failed to rename directory {old_path}: {e}")


if __name__ == "__main__":
    current_folder = os.getcwd()
    print(f"Processing: {current_folder}")

    rename_items(current_folder)

    print("Done.")
