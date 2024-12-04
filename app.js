// Array of blog posts data (could be extended or fetched from an API)
const blogPosts = [
    {
        title: "Welcome to StandardOiler",
        content: "StandardOiler is an experimental project started by me, Robert Schairer. This project was created to explore the use of AI tools in the context of building a business and a company to support it. The purpose of the project is to not only explore available AI tools, but also to put them to the test with a goal in mind. As a mandate, and starting with this website, AI tools must be used insofar that quality and safety can be maintained. AI tools will be consulted and tasked as though they are consultants or employees. The idea is to test the hype, cut costs, and run a one man show as if it were a proper small company. The core product of the company is actually something I am very excited about, but for several reasons, the risk is too high for me to quit my job and persue it in the traditional sense full time. There are too many unknowns - the industry, which I am not 'in', is built on thin margins, and I do not know if my invention will be accepted by customers, and most of all I do not want to sacrafice my current position and career... yet. To reduce my risk, I have decided to reduce my investment of time and money to the point where I do not have to also lose my wages. What could be a better way to de-risk than with the incredible emerging Artificial Intelligence technology? Well, you might have a couple better ideas, or maybe even think I'm adding to my risk, but I have a second, equally important goal. This project will expose me to AI more than most people and will require me to use it with rigor. This project will be my education in AI. I want to jump straight into the deep end of the pool without having to prove myself to anyone else by gaining a certificate from a questionable online bootcamp, or enrolling in a MBA where AI curriculum will be debated for longer than the next development cycle. AI is moving fast, and I don't want to be left behind. -R. Schairer 2.12.24"
    }
];

// Function to create a blog post element
function createBlogPost(title, content) {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    
    const postTitle = document.createElement('h2');
    postTitle.textContent = title;
    
    const postContent = document.createElement('p');
    postContent.textContent = content;
    
    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);
    
    return postElement;
}

// Inject blog posts into the #blog-posts container
const blogContainer = document.getElementById('blog-posts');
blogPosts.forEach(post => {
    const blogPost = createBlogPost(post.title, post.content);
    blogContainer.appendChild(blogPost);
});
