import os
import sys


def read_file(file_path):
    with open(file_path, "r") as file:
        data = []
        for line in file:
            data.append(line)
        return data


def read_files_in_directory(directory):
    allData = []
    for filename in os.listdir(directory):
        if filename == "hu001_1999_04_20_20.l100":  # Process only text files .endswith
            file_path = os.path.join(directory, filename)
            data = read_file(file_path)
            allData.append(data)
    return allData


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Please provide the directory path as an argument.")
        sys.exit(1)

    directory_path = sys.argv[1]
    testData = read_files_in_directory(directory_path)
    print(len(testData[0]))
    print(testData[0][13])
