import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Section,
  CastImg,
  List,
  ListItem,
  Text,
  TextName,
  PlaceholderImg,
} from './Cast.styled';
import pictureNotFound from './notFoundPicture.webp';
const API_KEY = '53f91c80aac0fdf8257fab8d211f13b5';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`;
  useEffect(() => {
    fetch(URL)
      .then(respons => respons.json())
      .then(data => {
        setCast(data.credits.cast);
      });
  }, [URL]);

  return (
    <>
      {cast && (
        <Section>
          <List>
            {cast.map(item => (
              <ListItem key={item.id}>
                {item.profile_path ? (
                  <CastImg
                    src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                    alt="profile_photo"
                  />
                ) : (
                  <PlaceholderImg
                    src={`${pictureNotFound}`}
                    alt="profile_photo"
                  />
                )}

                <TextName>{item.name}</TextName>
                <Text>Character - {item.character}</Text>
              </ListItem>
            ))}
          </List>
        </Section>
      )}
    </>
  );
}
