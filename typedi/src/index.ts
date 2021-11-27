import 'reflect-metadata'
import Container, { Inject, Service } from 'typedi'
import Bootstrap from './components/bootstrap'
import Smartphone from './smartphone/smartphone'

Bootstrap.run()
const smartphone = Container.get(Smartphone)
smartphone.showSmartphoneInfo()
