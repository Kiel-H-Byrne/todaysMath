import { useState } from "react";

type IBookmark = {
  date: string,
      comment: string
}
const SaveBookmarkComponent = () => {
  const [bookmarks, setBookmarks] = useState([] as IBookmark[] );

  // Function to handle bookmark button click
  const handleBookmark = (date: string, comment: string) => {
    const bookmark = {
      date: date,
      comment: comment
    };
    setBookmarks([...bookmarks, bookmark]);
  };

  return (
    <div>
      <h2>Save or Bookmark Dates/Comments</h2>
      {/* Render your date and comment inputs here */}
      <button
        onClick={() => handleBookmark("04/25/2023", "Today's mathematics")}
      >
        Bookmark
      </button>
      {/* Render the rest of your application here */}
      <h3>Saved Bookmarks</h3>
      <ul>
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <strong>Date: </strong>
            {bookmark.date}, <strong>Comment: </strong>
            {bookmark.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaveBookmarkComponent;

