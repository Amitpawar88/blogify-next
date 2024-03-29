import Image from "next/image";
import styles from "./singlePost.module.css";

const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image></Image>
        <Image
          src="https://images.pexels.com/photos/20355450/pexels-photo-20355450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/20355450/pexels-photo-20355450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className="styles.detailTitle">Author</span>
            <span className={styles.detailValue}>Amit Pawar</span>
          </div>
          <div className={styles.detailText}>
            <span className="styles.detailTitle">Published</span>
            <span className={styles.detailValue}>07.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aliquid quae ipsam debitis. Nesciunt, suscipit veritatis?
          </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
