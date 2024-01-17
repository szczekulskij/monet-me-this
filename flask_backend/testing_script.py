# Make it so that you can run it via a shell command and it generates what you want it to aye
import sys

def transformPhotoToMonet(input_photo_location):
    '''
    input_photo: str - location of the photo
    '''
    return 
    

def transformPhotoToVanGogh(input_photo_location):
    '''
    input_photo: str - location of the photo
    '''
    return 


########################################################################
########################################################################
########################################################################

def main_func(artist, ):
    if artist == "monet":
        photo = transformPhotoToMonet()
    elif artist == "vanGogh":
        photo = transformPhotoToVanGogh()
    else :
        raise Exception("Wrong artist name provided.")

    return photo


if __name__ == "__main__":
    args = sys.argv
    artist = args[1]
    print(main_func(artist))