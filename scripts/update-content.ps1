
if (Test-Path -Path 'content/blog') {
  rm -r content/blog/*
}

git clone https://github.com/t02smith/portfolio-blog.git content/blog