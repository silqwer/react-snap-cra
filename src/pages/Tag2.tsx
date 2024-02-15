import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

export default function Tag1() {
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const image = searchParams.get("image") ?? "";
    setImageUrl(image);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("image")]);

  useEffect(() => {
    const title = searchParams.get("title") ?? "";
    setTitle(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("title")]);

  return (
    <div>
      <Helmet>
        <title>Tag2</title>
        <meta property="og:site_name" content="TwinWorld" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://twin.world" />
        <meta property="og:description" content="설명 테스트입니다." />
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <h1>Tag2</h1>
      <div>{title}</div>
      <div>{imageUrl}</div>
      <img src={imageUrl} alt="동적 이미지" />
    </div>
  );
}
