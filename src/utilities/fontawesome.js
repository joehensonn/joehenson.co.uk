import { library } from '@fortawesome/fontawesome-svg-core'
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faVolumeMute, faVolumeUp)

console.log(library);