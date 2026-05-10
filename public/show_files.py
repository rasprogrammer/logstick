import os

def list_all_recursive(target_path='.'):
    try:
        print(f"Recursively listing: {os.path.abspath(target_path)}\n")
        
        for root, dirs, files in os.walk(target_path):
            # Print the current folder being looked at
            print(f"\nDirectory: {root}")
            
            # List sub-folders in this directory
            for directory in dirs:
                print(f"  [Folder] {directory}")
                
            # List files in this directory
            for file in files:
                print(f"  [File]   {file}")
                
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    list_all_recursive('.')
