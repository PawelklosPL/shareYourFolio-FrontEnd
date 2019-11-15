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
    private randSharePoint(): number {
        const maxNumber = 3000;
        return Math.floor(Math.random() * Math.floor(maxNumber));
    }

    private pancakeAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'Pancake';
        avatar.authorId = '1234';
        avatar.folderName = 'Placuszki';
        avatar.tags = ['food', 'pancake', 'dinner']
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'Pancake is a good diner.'
        return avatar;
    }
    private houseAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'House';
        avatar.authorId = '2222';
        avatar.folderName = 'Best homes in the north';
        avatar.tags = ['home', 'north']
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. '
        return avatar;
    }
    private dogsAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'Dogs';
        avatar.authorId = '3333';
        avatar.folderName = 'Faithful dogs';
        avatar.tags = ['Dogs', 'Pet', 'Faithful'];
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in.'
        return avatar;
    }
    private catsAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'Cats';
        avatar.authorId = '4444';
        avatar.folderName = 'Cats are the best';
        avatar.tags = ['Cats', 'Cat', 'Best']
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'cats, are better than dog.'
        return avatar;
    }
    private pcPartAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'PcPart';
        avatar.authorId = '5555';
        avatar.folderName = 'Pc parts';
        avatar.tags = ['pc', 'hdd', 'ssd', 'drive', 'parts'];
        avatar.publishDate = new Date(Date.now());
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get.'
        return avatar;
    }
}