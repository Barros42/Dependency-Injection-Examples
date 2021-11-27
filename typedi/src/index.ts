import 'reflect-metadata'
import Container from 'typedi'
import Bootstrap from './bootstrap'
import Smartphone from './smartphone/smartphone'

Bootstrap.run()
const smartphone = Container.get(Smartphone)
smartphone.showSmartphoneInfo()
