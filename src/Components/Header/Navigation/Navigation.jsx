import { Category } from './Category/Category.jsx'
import { Gender } from './Gender/Gender.jsx'

export const Navigation = () => (
  <nav>
    <div className="container">
      <Gender />
      <Category />
    </div>
  </nav>
);