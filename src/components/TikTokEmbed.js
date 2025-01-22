import React, { useEffect } from 'react';

const TikTokEmbed = ({ videoId, username, hashtag, music }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@${username}/video/${videoId}`}
        data-video-id={videoId}

        style={{ 
          minWidth: '325px',
          maxWidth: '605px',
          width: '100%',
          height: 'auto',
        }}
      >
        <section>
          <a
            target="_blank"
            title={`@${username}`}
            href={`https://www.tiktok.com/@${username}?refer=embed`}
          >
            @{username}
          </a>
          <a
            target="_blank"
            title={`#${hashtag}`}
            href={`https://www.tiktok.com/tag/${hashtag}?refer=embed`}
          >
            #{hashtag}
          </a>
          <a
            target="_blank"
            title={`♬ ${music}`}
            href={`https://www.tiktok.com/music/${music}?refer=embed`}
          >
            ♬ {music}
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;
