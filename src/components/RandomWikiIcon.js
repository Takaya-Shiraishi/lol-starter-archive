import React, { useState, useEffect } from 'react';

const RandomWikiIcon = () => {
  const [iconPath, setIconPath] = useState('');

  useEffect(() => {
    // アイコンのファイルパスを配列に格納
    const icons = [
      '/img/!webIcon/wikiicon1.webp',
      '/img/!webIcon/wikiicon2.webp',
      '/img/!webIcon/wikiicon3.webp',
      '/img/!webIcon/wikiicon4.webp',
      '/img/!webIcon/wikiicon5.webp',
    ];

    // 配列からランダムに1つのパスを選択
    const randomIconPath = icons[Math.floor(Math.random() * icons.length)];
    setIconPath(randomIconPath);
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時にのみ実行

  return (
    <div>
      {iconPath && <img src={iconPath} alt="Wiki Icon" style={{ maxWidth: 500, maxHeight: 500 }} />}
    </div>
  );
};

export default RandomWikiIcon;
