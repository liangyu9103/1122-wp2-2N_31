import { useState, useEffect } from 'react';
import axios from 'axios';

let api_url = 'https://szbwskgtksqzkhaokhez.supabase.co/rest/v1/card_31?id=eq.10';

const SupaPatchBlog_31 = () => {
  const [name, setName] = useState('Liang Yu');
  const [id, setId] = useState(208410331);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromSupabase = async () => {
    try {
      const response = await axios.patch(
        api_url,
        {
          
          title: 'Liang Yu000'

        },
        {
          headers: {
            apikey:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Yndza2d0a3NxemtoYW9raGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjMwNjcsImV4cCI6MjAxMTk5OTA2N30.bUnXA78fO4W9Feozn-19qwgpOel9K7ekJnuToGkkWwc',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Yndza2d0a3NxemtoYW9raGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjMwNjcsImV4cCI6MjAxMTk5OTA2N30.bUnXA78fO4W9Feozn-19qwgpOel9K7ekJnuToGkkWwc',
          },
        }
      );

      console.log('blogs data', response);
      //setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);
  return (
    <section className="blogs">
      {' '}
      <div className="section-title">
        {' '}
        <h2> Patch Blogs Using http </h2>{' '}
        <h3>
          {' '}
          {name}, {id}{' '}
        </h3>{' '}
      </div>{' '}
      <div className="blogs-center">
        {' '}
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item;
          return (
            <article key={id} className="blog">
              {' '}
              <img src={img} alt="Coffee photo" className="img blog-img" />{' '}
              <div className="blog-content">
                {' '}
                <span>
                  {' '}
                  {category} <i className="fa-solid fa-mug-saucer"></i>{' '}
                </span>{' '}
                <h3>{title}</h3> <p>{descrip}</p> <a href="#">read more</a>{' '}
              </div>{' '}
            </article>
          );
        })}{' '}
      </div>{' '}
    </section>
  );
};
export default SupaPatchBlog_31;
