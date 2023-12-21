const comment = [
    {
        name: "ishika jasmine",
        comment : "comment",
        replies:[
            {
                name: "ishika jasmine",
                comment : "comment",
                replies:[
                    {
                        name: "ishika jasmine",
                        comment : "comment",
                        replies:[
                            {
                                name: "ishika jasmine",
                                comment : "comment",
                                replies:[
                                    {
                                        name: "ishika jasmine",
                                        comment : "comment",
                                        replies:[
                                            
                                        ]
                                    },
                                ]
                            },
                            
                        ]
                    },
                    
                ]
            },
           
        ]
    },
    {
        name: "ishika jasmine",
        comment : "comment",
        replies:[
            
        ]
    },
    {
        name: "ishika jasmine",
        comment : "comment",
        replies:[
            
        ]
    },
    {
        name: "ishika jasmine",
        comment : "comment",
        replies:[
            {
                name: "ishika jasmine",
                comment : "comment",
                replies:[
                    
                ]
            }
        ]
    },
    {
        name: "ishika jasmine",
        comment : "comment",
        replies:[
            
        ]
    },
    {
        name: "ishika jasmine",
        comment : "comment",
        replies:[
            
        ]
    },
    {
        name: "ishika jasmine",
        comment : "comment",
        replies:[
            
        ]
    }
]
const Comment=({data})=>{
    const {name,comment}=data;
    return(
       <>
       <div className=" flex bg-slate-100  shadow-md  ">
           <img className="h-9 w-13 "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKOdmJz8Z2pDtYgFgR2u9spABvNNPKYYtGw&usqp=CAU"/>
          <div>
            <h1 className="px-2 font-bold ">{name}</h1>
           <p className="px-2 font-bold ">{comment}</p>
           {/*<CommentList comments={data.replies}/>*/}
           </div>
       </div>
       </>
    )
}
const CommentList=({comments})=>{
 return comments.map((comment,index)=>( 
      <div  key={index}> 
 <Comment data={comment}/>
 <div className="ml-5  p-2 m-2 border-l-2 border-black">
 <CommentList comments={comment.replies}/>
 </div>
 </div>
 ));
}
const CommentContainer=()=>{
    return(
        <div className="p-2 m-2">
          <div className="font-bold px-2">Comment</div>
          <CommentList comments={comment}/>
        </div>
    )
}
export default CommentContainer;
//add functionality of real comments
