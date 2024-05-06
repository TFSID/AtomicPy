import os

def generate_init_files(directory):
    """
    Recursively generates __init__.py files in all subdirectories of the given directory.
    
    Args:
    - directory (str): The directory to start the traversal from.
    
    Yields:
    - str: The paths of the created __init__.py files.
    """
    for root, dirs, files in os.walk(directory):
        init_file_path = os.path.join(root, "__init__.py")
        if not os.path.exists(init_file_path):
            with open(init_file_path, "w"):
                pass  # Create an empty __init__.py file
            yield init_file_path

# Example usage:
directory = "frontend/assets"
for init_file_path in generate_init_files(directory):
    print("Created:", init_file_path)
