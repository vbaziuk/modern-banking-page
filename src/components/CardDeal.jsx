import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel leo molestie, pretium sapien et, viverra velit. Proin porttitor nisl arcu, id tincidunt justo vulputate vel.</p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>
    </div>


  </section>
)

export default CardDeal