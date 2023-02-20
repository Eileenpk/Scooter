import GetWindowWidth from '@/components/functions/GetWindowWidth'
export default function GetImageBasedOnWidth (image1, image2, image3) {
    const {width} = GetWindowWidth()
    if(width < 768) {
        return image1
      } else if(width < 1200) {
        return image2
      } else {
        return image3
      }
}