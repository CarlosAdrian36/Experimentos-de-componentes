import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Íconos que VAS A USAR (no todos)
import {
  faUser,
  faLock,
  faPlus,
  faTrash,
  faPen,
  faCheck,
  faXmark,
  faCircleQuestion,
  faCircleDot,
  faArrowRightArrowLeft,
  faFont,
  faCheckDouble,
  faArrowsTurnToDots,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

// Registrar íconos
library.add(
  faUser,
  faLock,
  faPlus,
  faTrash,
  faPen,
  faCheck,
  faXmark,
  faCircleQuestion,
  faCircleDot,
  faArrowRightArrowLeft,
  faFont,
  faCheckDouble,
  faArrowsTurnToDots,
  faUserGroup,
)

export { FontAwesomeIcon }
