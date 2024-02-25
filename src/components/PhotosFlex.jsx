import React from 'react'
import "./styles.css"

const PhotosFlex = () => {
    return (
        <div className='flexphotos flex flex-col gap-4 lg:px-64 mt-16'>

            <div>
                <a target='_blank' href="https://science.nasa.gov/wp-content/uploads/2023/07/webb-flickr-52660766241-63ab077ba6-4k-slice.jpg?w=4096&format=jpeg">
                    <img src="https://science.nasa.gov/wp-content/uploads/2023/07/webb-flickr-52660766241-63ab077ba6-4k-slice.jpg?w=4096&format=jpeg" alt="image-0" />
                </a>
            </div>

            <div className='flex flex-col lg:flex-row gap-3'>
                <div className='column flex flex-col gap-4'>
                    <a target='_blank' href="https://science.nasa.gov/wp-content/uploads/2023/06/webb-flickr-52259221868-30e1c78f0c-4k-jpg.webp">
                        <img src="https://science.nasa.gov/wp-content/uploads/2023/06/webb-flickr-52259221868-30e1c78f0c-4k-jpg.webp" alt="image-1" />
                    </a>
                    <a target='_blank' href="https://c02.purpledshub.com/uploads/sites/48/2022/10/webb-pillars-creation-crop-65e34f6-e1678960806604.jpeg">
                        <img src="https://c02.purpledshub.com/uploads/sites/48/2022/10/webb-pillars-creation-crop-65e34f6-e1678960806604.jpeg" alt="image-2" />
                    </a>
                    <a target='_blank' href="https://getwallpapers.com/wallpaper/full/6/2/7/420324.jpg">
                        <img src="https://getwallpapers.com/wallpaper/full/6/2/7/420324.jpg" alt="image-3" />
                    </a>
                </div>

                <div className='column flex flex-col gap-4'>
                    <a target='_blank' href="https://svs.gsfc.nasa.gov/vis/a010000/a014100/a014146/SupermassiveBinaryBlackHoles_desktop.png">
                        <img src="https://svs.gsfc.nasa.gov/vis/a010000/a014100/a014146/SupermassiveBinaryBlackHoles_desktop.png" alt="image-4" className='h-96'/>
                    </a>
                    <a target='_blank' href="https://www.dpreview.com/files/p/articles/8679954519/doran-sun-4k.jpeg">
                        <img src="https://www.dpreview.com/files/p/articles/8679954519/doran-sun-4k.jpeg" alt="image-5" className='h-96 object-cover'/>
                    </a>
                    <a target='_blank' href="https://www.desktopbackground.org/download/1920x1200/2011/01/08/138733_real-earth-from-space-nasa-wallpaper_2560x1600_h.jpg">
                        <img src="https://www.desktopbackground.org/download/1920x1200/2011/01/08/138733_real-earth-from-space-nasa-wallpaper_2560x1600_h.jpg" alt="image-6" className='h-96 object-cover'/>
                    </a>
                </div>

                <div className='column flex flex-col gap-4'>
                    <a target='_blank' href="https://www.nasa.gov/wp-content/uploads/2023/03/main_image_deep_field_smacs0723-5mb.jpg">
                        <img src="https://www.nasa.gov/wp-content/uploads/2023/03/main_image_deep_field_smacs0723-5mb.jpg" alt="image-7" className='img-7'/>
                    </a>
                    <a target='_blank' href="https://mymodernmet.com/wp/wp-content/uploads/2019/06/nasa-free-photos-online-thumbnail.jpg">
                        <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/06/nasa-free-photos-online-thumbnail.jpg" alt="image-8" className='img-8'/>
                    </a>
                    <a target='_blank' href="https://c4.wallpaperflare.com/wallpaper/664/594/348/sci-fi-galaxy-black-hole-hubble-wallpaper-preview.jpg">
                        <img src="https://c4.wallpaperflare.com/wallpaper/664/594/348/sci-fi-galaxy-black-hole-hubble-wallpaper-preview.jpg" alt="image-9" className='img-9'/>
                    </a>
                    <a target='_blank' href="https://www.mundodeportivo.com/urbantecno/hero/2023/11/ahora-ya-sabemos-el-motivo-por-el-que-algunos-planetas-encogen.png?width=768&aspect_ratio=16:9&format=nowebp">
                        <img src="https://www.mundodeportivo.com/urbantecno/hero/2023/11/ahora-ya-sabemos-el-motivo-por-el-que-algunos-planetas-encogen.png?width=768&aspect_ratio=16:9&format=nowebp" alt="image-10" className='img-10'/>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default PhotosFlex