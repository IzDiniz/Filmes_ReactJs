import data from "../artigos.json"

function Home() {

    return ( 
        <>
            <div>

            <input type="text" name="BuscaFilmes" id="BuscaFilmes" placeholder="Digite sua busca aqui"/>

            <div id="listaFilmes" className="grid grid-cols-3 gap-3"></div>
                {
                    data.map(
                        (post, index) => (
                            <div id="card" key={index}>
                                <h1>{post.title}</h1>
                                <img src={post.image} alt="image" />
                                <div id="tags">
                                    {post.tags.map(tags => (
                                        <span key={tags}>{tags}</span>
                                    ))}
                                </div>
                                <div id="textos">
                                    {post.text.map((texto, index)) => (
                                        <p key={index}>{index.text}</p>
                                        ))}
                                    </div>

                            </div>
                    ))
                }
            </div>
            
        </>
     );
}

export default Home;



{/*         <div id="listaFilmes">
                <div>
                    <h1>Titulo</h1>
                    <img src="" alt="" />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div> */}