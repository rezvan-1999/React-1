export default function Card() {
  return (
    <div className="card m-5">
      <img
        className="card-img-top"
        src="https://c8.alamy.com/comp/2CGPMGT/famous-actor-star-bright-vector-star-on-celebrity-boulevard-walk-of-fame-glitter-star-on-dark-granite-texture-personal-achievements-concept-2CGPMGT.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Bob Dylan</h5>
        <p className="card-text">
          Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
          singer/songwriter, author, and artist who has been an influential
          figure in popular music and culture for more than five decades.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Bob_Dylan"
          className="btn btn-primary"
        >
          Go to wikipedia
        </a>
      </div>
    </div>
  );
}
