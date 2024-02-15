import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

export default function Tag1() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") as string;
  const image = searchParams.get("image") as string;

  return (
    <div>
      <Helmet>
        <title>Tag2</title>
        <meta property="og:site_name" content="TwinWorld" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://twin.world" />
        <meta property="og:description" content="설명 테스트입니다." />
        <meta property="og:image" content={image} />
      </Helmet>
      <h1>Tag2</h1>
      <div>{title}</div>
      <div>{image}</div>
      <img src={image} alt="동적 이미지" />
    </div>
  );
}
