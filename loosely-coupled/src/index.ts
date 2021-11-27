import GoodCamera from "./components/cameras/goodCamera"
import MediumMemory from "./components/memories/mediumMemory"
import LoudSpeaker from "./components/speakers/loudSpeaker"
import LowSpeaker from "./components/speakers/lowSpeaker"
import SmallStorage from "./components/storages/smallStorage"
import Smartphone from "./smartphone/smartphone"

const storage = new SmallStorage()
const memory = new MediumMemory()
const camera = new GoodCamera()
const speaker = new LoudSpeaker()

console.clear()

const devPiraPhone = new Smartphone(
    'DevPiraPhone',
    storage,
    memory,
    camera,
    speaker
)

devPiraPhone.showSmartphoneInfo()