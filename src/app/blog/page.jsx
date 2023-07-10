import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Heew Blog Information",
  description: "This is Blog Page",
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?select=10", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  console.log(data)
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={200}
            height={150}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.desc}>{item.body}</p>
        </div>
      </Link>
      ))}
    </div>
  );
};

export default Blog;
