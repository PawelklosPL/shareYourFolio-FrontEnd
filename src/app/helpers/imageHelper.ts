import { Avatar } from '../user-project/avatar/avatar.model';

export class ImageHelpers {

    public static defaultUrl = 'assets/temp/1.jpg';

    public static defaultName(avatars: Avatar[] | any) {
        avatars.forEach((avatar: Avatar) => {
            const isImage = avatar.ImagesUrl[0].indexOf('.jpg');
            if (isImage === -1) {
                avatar.ImagesUrl[0] = this.defaultUrl;
            }
        })
    }

}