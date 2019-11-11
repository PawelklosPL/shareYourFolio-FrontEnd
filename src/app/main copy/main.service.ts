import { Avatar } from './main.model';

export class MainService {
    public getMainAvatarList(): Avatar[] {

        return [
            this.pancakeAvatar(), this.pcPartAvatar(), this.houseAvatar(), 
            this.dogsAvatar(), this.catsAvatar(), this.pancakeAvatar(),
            this.houseAvatar(), this.dogsAvatar(), this.catsAvatar(),
            this.houseAvatar(), this.pcPartAvatar(),this.pancakeAvatar(), 
            this.dogsAvatar(),this.pcPartAvatar()];
    }

    private pancakeAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'Pancake';
        avatar.authorId = '1234';
        avatar.folderName = 'Placuszki';
        avatar.tags = ['food', 'pancake', 'dinner']
        avatar.imagineUrl = ['https://images.pexels.com/photos/718739/pexels-photo-718739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://cdn.pixabay.com/photo/2017/09/30/12/13/pancakes-2801960_960_720.jpg'];
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = 50;
        avatar.shortDescription = 'Pancake is a good diner.'
        return avatar;
    }
    private houseAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'House';
        avatar.authorId = '2222';
        avatar.folderName = 'Best homes in the north';
        avatar.tags = ['home', 'north']
        avatar.imagineUrl = ['https://live.staticflickr.com/1854/43742610484_1e47c3f8d1_b.jpg', 'https://cdn.pixabay.com/photo/2017/10/17/16/04/houses-2861100_960_720.jpg', 'https://www.publicdomainpictures.net/pictures/20000/nahled/traditional-dutch-houses-11294081342QxR.jpg'];
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = 9;
        avatar.shortDescription = 'An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. '
        return avatar;
    }
    private dogsAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'Dogs';
        avatar.authorId = '3333';
        avatar.folderName = 'Faithful dogs';
        avatar.tags = ['Dogs', 'Pet', 'Faithful']
        avatar.imagineUrl = ['https://live.staticflickr.com/730/21225816748_c41918293d_b.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg'];
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = 2334;
        avatar.shortDescription = 'Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in.'
        return avatar;
    }
    private catsAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'Cats';
        avatar.authorId = '4444';
        avatar.folderName = 'Cats are the best';
        avatar.tags = ['Cats', 'Cat', 'Best']
        avatar.imagineUrl = ['https://cdn.pixabay.com/photo/2019/03/30/10/23/tiger-cat-4090904_960_720.jpg'];
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = 1;
        avatar.shortDescription = 'cats, are better than dog.'
        return avatar;
    }
    private pcPartAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'PcPart';
        avatar.authorId = '5555';
        avatar.folderName = 'Pc parts';
        avatar.tags = ['pc', 'hdd', 'ssd', 'drive', 'parts']
        avatar.imagineUrl = ['https://cdn.pixabay.com/photo/2016/03/23/00/55/hdd-1273984_960_720.jpg'];
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = 15;
        avatar.shortDescription = 'Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get.'
        return avatar;
    }
}