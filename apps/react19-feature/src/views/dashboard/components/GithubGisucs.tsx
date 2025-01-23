import Gisucs from "@giscus/react";

const GithubGisucs: React.FC = () => {
  return (
    <main className="px-6 bg-white backdrop-blur-sm my-14 md:py-28 bg-opacity-70 md:px-8">
      <div className="mx-auto max-w-[1080px]">
        <Gisucs
          repo="limuen/reactfeature19giscus"
          repoId="R_kgDONiYPKw"
          category="Announcements"
          categoryId="DIC_kwDONiYPK84Clhcz"
          mapping="pathname"
          term="哈喽啊，树哥"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="1"
          inputPosition="top"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default GithubGisucs;
