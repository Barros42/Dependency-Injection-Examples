import NormalCamera from "./components/cameras/normalCamera"
import SmallMemory from "./components/memories/smallMemory"
import LowSpeaker from "./components/speakers/lowSpeaker"
import SmallStorage from "./components/storages/smallStorage"
import Smartphone from "./smartphone/smartphone"

const storage = new SmallStorage()
const memory = new SmallMemory()
const camera = new NormalCamera()
const speaker = new LowSpeaker()

console.clear()

const devPiraPhone = new Smartphone(
    'DevPiraPhone',
    storage,
    memory,
    camera,
    speaker
)

devPiraPhone.showSmartphoneInfo()