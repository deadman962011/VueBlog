<template>
    <div class="BlogItem">
        <div class="post post-row">
        <a class="post-img" href="blog-post.html"><img src="http://127.0.0.1/cdn/webmag/post-1.jpg" alt=""></a>
        <div class="post-body">
            <div class="post-meta">
                <a class="post-category cat-2" style="background-color:" href="#">{{ blog.category.CategoryName }}</a>
                <span class="post-date">March 27, 2018</span>
            </div>
            <h3 class="post-title"><a href="blog-post.html">{{blog.BlogTitle}} </a></h3>
            <p>{{ blog.BlogBody }}</p>
        </div>
        </div>
    </div>
</template>


<script>
export default {
     props:['blog']
     
}
</script>

<style scoped>
 .post {
     margin-bottom: 40px;
}
 .post .post-img {
     display: block;
     -webkit-transition: 0.2s opacity;
     transition: 0.2s opacity;
}
 .post .post-img:hover, .post .post-img:focus {
     opacity: 0.9;
}
 .post .post-img > img {
     width: 100%;
}
 .post .post-meta {
     margin-top: 15px;
     margin-bottom: 15px;
}
 .post-meta .post-category {
     font-size: 13px;
     text-transform: uppercase;
     padding: 3px 10px;
     font-weight: 600;
     border-radius: 2px;
     margin-right: 15px;
     color: #FFF;
     background-color: #212631;
     -webkit-transition: 0.2s opacity;
     transition: 0.2s opacity;
}
 .post-meta .post-category:hover, .post-meta .post-category:focus {
     text-decoration: none;
     opacity: 0.9;
}
 .post-meta .post-category.cat-1 {
     background-color: #4BB92F;
}
 .post-meta .post-category.cat-2 {
     background-color: #ff8700;
}
 .post-meta .post-category.cat-3 {
     background-color: #8d00ff;
}
 .post-meta .post-category.cat-4 {
     background-color: #0078ff;
}
 .post-meta .post-date {
     font-size: 13px;
     font-weight: 600;
}
 .post .post-title {
     font-size: 18px;
     margin-bottom: 0px;
}
 .post-tags li {
     display:inline-block;
     margin-right:3px;
     margin-bottom:5px;
}
 .post-tags li a {
     display:block;
     color:#fff;
     background-color: #212631;
     padding:3px 10px;
     font-weight:600;
     border-radius:2px;
     -webkit-transition:0.2s opacity;
     transition:0.2s opacity;
}
 .post.post-thumb {
     position: relative;
}
 .post.post-thumb .post-img:after {
     content: '';
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
     top: 0;
     background: -webkit-gradient(linear, left bottom, left top, from(rgba(33, 38, 49, 0.3)), to(transparent));
     background: linear-gradient(to top, rgba(33, 38, 49, 0.3) 0%, transparent 100%);
}
 .post.post-thumb .post-body {
     position: absolute;
     bottom: 0px;
     padding: 20px 15px;
}
 .post.post-thumb .post-meta .post-date {
     color: #eceef2;
}
 .post.post-thumb .post-title {
     font-size: 22px;
}
 .post.post-thumb .post-title > a {
     color: #FFF;
}
 .post.post-row:after {
     content: '';
     display: block;
     clear: both;
}
 .post.post-row .post-img {
     width: 40%;
     float: left;
}
 .post.post-row .post-body {
     margin-left: calc(40% + 30px);
}
 .post.post-row .post-meta {
     margin-top: 0px;
}
 .post.post-row .post-title {
     margin-bottom: 15px;
}

 @media only screen and (max-width: 767px) {
	.page-header h1 {
		font-size: 28px;
	}
     .post.post-row .post-img {
         width: 100%;
         float: none;
    }
     .post.post-row .post-body {
         margin-left: 0px;
    }
     .post.post-row .post-meta {
         margin-top: 15px;
    }
     .post.post-row .post-body p {
         display:none;
    }
}


</style>