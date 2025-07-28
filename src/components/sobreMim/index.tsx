import Image from "next/image"
import styles from "./sobreMim.module.css"
import ScrollFade from "@/util/scrollFade"

export default function SobreMim() {

    return (
          <ScrollFade id="About">
            <section id="About" className={styles.section}>
                <h2 style={{ color: "#24be5f"}}>Sobre Mim</h2>
                <div className={styles.container} >
                    <div className={styles.imageContainer}>
                        <Image src="https://zeldacentral.com/wp-content/uploads/2025/03/fsplus_01.gif" className={styles.link} width={50} height={50} alt="link" />
                        <Image src="/sobreMim.png" alt="Foto de perfil" width={550} height={200} className={styles.profileImage} />
                    </div>
                    <p className={styles.description}>
                        Pellentesque mollis mattis quam. Pellentesque lectus erat, mattis eu luctus ac, faucibus nec nibh. Nulla neque ante, dictum eu metus eu, laoreet laoreet lorem. Proin tellus dui, rutrum a neque eu, dapibus venenatis felis. Maecenas a sollicitudin erat. Curabitur ornare posuere pharetra. Sed tellus massa, tincidunt eget elementum quis, interdum a enim. <br />
                        -. Morbi blandit pretium turpis a volutpat. Nam ut pulvinar sem, at accumsan mauris. Aliquam erat volutpat. Sed tincidunt turpis scelerisque quam bibendum, ac rhoncus mi commodo. In venenatis est sodales ultrices dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vulputate facilisis leo, hendrerit vestibulum ligula tincidunt in. Cras gravida fermentum nibh quis finibus. Mauris congue sollicitudin interdum. Nunc posuere felis vitae tempus euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                </div>
            </section>
        </ScrollFade>
    )
}