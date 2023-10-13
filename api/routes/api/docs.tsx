const docs = () => {
  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">API Docs</h1>
        </div>
      </div>
      <div class="px-4 py-8">
        <dl>
          <dt>
            <a href="api/joke">api/joke</a>
          </dt>
          <dd>ジョークを喋ります。</dd>
        </dl>
      </div>
    </>
  );
};

export default docs;
