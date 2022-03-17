import { useEffect, useState } from "react"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"

const descriptions = [{ id: 1, name: 'GeForce RTX 3080 Ti', detail: 'The GeForce RTX™ 3080 Ti and RTX 3080 graphics cards deliver the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. They are built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.'},
{ id: 2, name: 'ACER MONITOR', detail:'Monitor comes with BlueLightShield and Visioncare technology reduces the exposure of blue light, which can be potentially harmful for Eyes, AcerVisionCare incorporates several features to reduce eye strain and provides a more comfortable viewing experience.' },
{ id: 3, name: 'APPLE MAC EXTENDED KEYBOARD  MQ052E/A', detail:'For use with your Mac as well as your iPod, the sleek, completely cable-free aluminum Apple Wireless Keyboard uses Bluetooth technology, so you are free to move the keyboard just about anywhere within range and wirelessly type away. Use the Apple Wireless Keyboard on your desk, on your lap, or anywhere within 30 feet of your Mac or iPad.Its compact design takes up 24 percent less space on your desktop than full-size keyboards, so you have extra room to move the keyboard around and mouse comfortably alongside of it.'},
{ id: 4, name: 'ASROCK MOTHER A320M-HDV R4.0', detail:'The PCIe Gen3 x4 Ultra M.2 interface pushes data transfer speeds up to 32Gb/s. In addition, it also supports SATA3 6Gb/s M.2 modules, and is compatible with ASRock’s U.2 Kit for installing some of the world’s fastest U.2 PCIe Gen3 x4 SSDs.'},
{ id: 5, name: 'KLIPX WEB CAMERA KWC-500', detail: 'Features 2.1MP resolution that delivers smooth HD video allowing you to clearly see and hear othersBuilt-in HD microphone enables clear conversations Plug and play design for immediate use'}
]

const gfetch = new Promise((resolve, reject) => {
    let condition = true
    if (condition) {
        setTimeout(() => resolve(descriptions), 2000)

    } else {
        reject('400 error')
    }

})

function UtilsProductDetails({idCard}) {

    //const [bool, setBool] = useState(true)
    const [descs, setDesc] = useState([])
    const [loading, setLoading] = useState(true)
    


    useEffect(() => {
        gfetch //simulacion de llamado a una api

            .then((resp) => setDesc(resp.find (prod=> prod.id === {idCard})))
            .catch((err) => console.log(err)) // capturamos todos los errores con el catch
            .finally(() => setLoading(false))//ej loading

    }, [])


    return (
        <>
 {loading ? <h2>Loading...</h2> : <ItemDetailContainer desc={descs} />}
   
        </>
    )
}

export default UtilsProductDetails