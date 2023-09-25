import { useState } from "react";
import { useCommentsQuery } from "./stores/hooks/useCommentsQuery";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCommentStore } from "./stores/CommentStore";
import { useGetQuery } from "./Hooks/useGetQuery";
import Users from "./Users";

const App = () => {
  const { addComments, deleteComments } = useCommentStore();
  const [comment, setcomment] = useState("");
  const { data: comments, isError, isLoading } = useCommentsQuery();
  const queryClient = useQueryClient();

  const addComment = async (comment) => {
    return await axios.post(`http://localhost:3000/Comments`, {
      id: Date.now(),
      comment: comment,
      postId: 101,
    });
  };

  const handleAddComment = useMutation({
    mutationFn: () => addComment(comment),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setcomment("");
    },
  });

  return (
    // <div>
    //   <input
    //     type="text"
    //     value={comment}
    //     onChange={(e) => setcomment(e.target.value)}
    //   />
    //   <button onClick={() => handleAddComment.mutate()}>Add Comment</button>
    //   <div>
    //     {isLoading ? <>Loading ...</> : <></>}
    //     {isError ? <>Error While fetching</> : <></>}
    //     {!isError && comments ? (
    //       <>
    //         {comments.map((commentItem) => {
    //           const { id, comment, postId } = commentItem;
    //           return (
    //             <div key={id}>
    //               <h2>id : {id}</h2>
    //               <h2>comment : {comment}</h2>
    //               <h2>postId : {postId}</h2>
    //             </div>
    //           );
    //         })}
    //       </>
    //     ) : (
    //       <></>
    //     )}
    //   </div>
    // </div>
    <>
      <Users />
    </>
  );
};

export default App;
