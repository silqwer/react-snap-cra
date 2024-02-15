import { Helmet } from "react-helmet-async";

export default function Tag1() {
  return (
    <div>
      <Helmet>
        <title>Tag1</title>
        <meta property="og:site_name" content="TwinWorld" />
        <meta property="og:title" content="태그" />
        <meta property="og:url" content="https://twin.world" />
        <meta property="og:description" content="설명 테스트입니다." />
        <meta
          property="og:image"
          content="https://source.unsplash.com/random"
        />
      </Helmet>
      <h1>Tag1</h1>
    </div>
  );
}
