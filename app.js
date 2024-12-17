// Array of blog posts data (could be extended or fetched from an API)
const blogPosts = [
    {
        title: "Welcome to StandardOiler",
        content: "StandardOiler is an experimental project started by me, Robert Schairer. This project was created to explore the use of AI tools in the context of building a business and a company to support it. The purpose of the project is to not only explore available AI tools, but also to put them to the test with a goal in mind. Starting with this website, AI tools must be used insofar that quality and safety can be maintained. AI tools will be consulted and tasked as though they are consultants or employees. The idea is to test the hype, cut costs, and run a one man show as if it were a proper small company. The core product of the company is actually something I am very excited about, but for several reasons, the risk is too high for me to quit my job and persue it in the traditional sense full time. There are too many unknowns - the industry, which I am not 'in', is built on thin margins, and I do not know if my invention will be accepted by customers, and most of all I do not want to sacrafice my current position and career... yet. To reduce my risk, I have decided to reduce my investment of time and money to the point where I do not have to also lose my wages. What could be a better way to de-risk than with the incredible emerging Artificial Intelligence technology? Well, you might have a couple better ideas, or maybe even think I'm adding to my risk, but I have a second, equally important goal. This project will expose me to AI more than most people and will require me to use it with rigor. This project will be my education in AI. I want to jump straight into the deep end of the pool without having to prove myself to anyone else by gaining a certificate from a questionable online bootcamp, or enrolling in a MBA where AI curriculum will be debated for longer than the next development cycle. AI is moving fast, and I don't want to be left behind. -R. Schairer 2.12.24", 
        date: "2024-12-02",
        title: "First steps"
        content: "Today I asked ChatGPT What are the first steps to starting a successful small business?‘ I guess the results are mostly what one would expect, but I‘ll make it an exercise anyway. \n 1. I already have a product idea which doesn’t exist on the market and I have the professional skills to develop it. I guess some people who want to start a business don’t have those things already in mind? I think my issue here is focus. I become easily distracted and that‘s why you are reading a blog about starting a business using AI tools. My interests are revolving. \n2. Market research really gets into something I have no idea about and one place I need to dig in. I believe it is something that people want, but I am not sure. I don‘t know how to do that research. Would doing that research either expose my idea or potentially start the clock on my patent application deadline? Do I make random posts on Reddit, and would the Redditor‘s accept it? Can I ask LLM‘s more detailed questions without concern that it or someone would steal my data? I have an aversion to typing my ideas into a box and sending it to a company. My primary emotion here is fear - I think that is my clue. I have a few more questions I can ask ChatGPT anyway. \n3. I don’t have a well-defined business model and I think that would be a fun one to run through AI with. \n4. Narrow my niche? I am a little surprised by this suggestion. Maybe my prompt was too limiting in the wording? I asked for an elaboration, and I get it. I think this one could be re-worded to 'Define my niche‘. Something like: Male, 30-75 years old, regularly wears t-shirts, sometimes a hat, and always shorts (his legs just don’t get cold). That‘s actually not bad, but I should probably go a little further. This could very well affect development.",
        date: "2024-12-17"
    }
];

// Function GPT said will split my post with newlines that will properly display. Lets see.
function formatContent(content) {
    // Split content by newlines and wrap them in <p> tags or <br> tags
    return content.split('\n').map(line => `<p>${line}</p>`).join('');
}

// Function to add a date to the blog post
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options); // Adjust locale as needed
}

// Function to create a blog post element
function createBlogPost(title, content, date) {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    
    const postTitle = document.createElement('h2');
    postTitle.textContent = title;
    
    const postDate = document.createElement('p');
    postDate.classList.add('post-date');
    postDate.textContent = formatDate(date);  // Format the date

    const postContent = document.createElement('p');
    postContent.textContent = content;
    
    postElement.appendChild(postTitle);
    postElement.appendChild(postDate);
    postElement.appendChild(postContent);
    
    return postElement;
}

// Inject blog posts into the #blog-posts container
const blogContainer = document.getElementById('blog-posts');
blogPosts.forEach(post => {
    const blogPost = createBlogPost(post.title, post.content);
    blogContainer.appendChild(blogPost);
});