import MediumMemory from "./components/memories/mediumMemory";
import SmallMemory from "./components/memories/smallMemory";
import SmallStorage from "./components/storages/smallStorage";
import Smartphone from "./smartphone/smartphone";

const storage = new SmallStorage()
const memory = new MediumMemory()

const devPiraPhone = new Smartphone(
    storage,
    memory
)

devPiraPhone.showStorageInfo()
devPiraPhone.showMemoryInfo()