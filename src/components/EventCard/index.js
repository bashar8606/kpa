import Image from "next/image";
import style from "./EventCard.module.scss";

const EventCard = (props) => {

    return (
        <div className={style.card}>
            <div className={style.card_img}>
                <div className="ratio">
                <Image src="/images/cover.webp" fill alt="shape" />
                </div>
            </div>
            <div className={style.card_body}>

            </div>
        </div>
    );
};

export default EventCard;
