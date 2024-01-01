import "../styles/home.css"
export default function Home(){
    return(
        
        <main>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="container">
             <div className="text">
             <h1>To Do Input</h1>
             </div>
              <div className="new">
                <div class="newfirst">
                <i className="fa-solid fa-book"></i>
                <input type="text" required="required" placeholder="New Todo" autofocus="autofocus"></input>
                </div>
                <button>Add new task</button>
              </div>
             <section className="list">
                <h1>To do List</h1>
                <div className="buttons">
                    <button>All</button>
                    <button>Done</button>
                    <button>To do</button>
                </div>
             </section>
             <section className="texts">
                <div className="text1">
                <p>Learn REACTJS basics</p>
                <div class="textend">
                <input type="checkbox" value="learn"></input>
                <i id="a" class="fa-solid fa-pencil"></i>
                <i id="b" class="fa-solid fa-trash"></i>
                </div>
                </div>
                <div className="text2">
                <p>Practice REACTJS</p>
                <div class="textend">
                <input type="checkbox" value="practice"></input>
                <i id="a" class="fa-solid fa-pencil"></i>
                <i id="b" class="fa-solid fa-trash"></i>
                </div>
                </div>
                <div className="text3">
                <p>Learn Redux</p>
                <div class="textend">
                <input type="checkbox" value="redux"></input>
                <i id="a" class="fa-solid fa-pencil"></i>
                <i id="b" class="fa-solid fa-trash"></i>
                </div>
                </div>
                <div className="text4">
                <p>Code portfolio in React</p> 
                <div class="textend">
                <input type="checkbox" value="portfolio"></input>
                <i id="a" class="fa-solid fa-pencil"></i>
                <i id="b" class="fa-solid fa-trash"></i>
                </div>
                </div>
                <div className="text5">
                <p>Learn React Native</p>
                <div class="textend">
                <input type="checkbox" value="native"></input>
                <i id="a" class="fa-solid fa-pencil"></i>
                <i id="b" class="fa-solid fa-trash"></i>
                </div>
                </div>
             </section>
             <div className="footer">
                <div class="buttons2">
                <button>Delete done tasks</button>
                <button>Delete all tasks</button>
                </div>
             </div>
            </div>
        </main>
    )
}
