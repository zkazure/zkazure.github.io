var relearn_searchindex = [
  {
    "breadcrumb": "My Personal Website",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "My Personal Website",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Cs_learns",
    "uri": "/cs_learn/index.html"
  },
  {
    "breadcrumb": "My Personal Website \u003e Stems",
    "content": "Example Let \\(F(x)\\) be defined for all real numbers except at \\(x=0\\) and \\(x=1\\), and satisfy the equation \\(F(x) + F( \\frac{x-1}{x}) = 1+x \\). Find the function \\(F(x)\\)\nSolution \\begin{equation} \\label{eq:1} F(x) + F(\\frac{x-1}{x}) = 1+x \\end{equation}\nmake \\( x = \\frac{x-1}{x} \\), have\n\\begin{equation} \\label{eq:2} F(\\frac{x-1}{x}) +F(- \\frac{1}{x-1}) = \\frac{2x-1}{x} \\end{equation}\nmake \\( x = - \\frac{1}{x-1} \\) in \\eqref{eq:2}, have\n\\begin{equation} \\label{eq:3} F(- \\frac{1}{x-1}) + F(x) = \\frac{x-2}{x-1} \\end{equation}\nAccording to \\eqref{eq:1}, \\eqref{eq:2}, \\eqref{eq:3}, have\n\\begin{equation} \\label{eq:4} F(x) = \\frac{x ^3-x ^2-1}{2x(x-1)} \\end{equation}\nLinear algebra perspective Found that you finally attained 3 equation with functions with 3 different variables.\nWhy not consider it as the matrix in linear algebra where you have to have 3 different linear equations to obtain actual values of 3 variables.\nNow we can construct the correct matrix to solve every problems of finding specific function.\nHow many transforms we need to find the specific function simplest condition If we just need two times.\nif we have \\( F(a) + F(b) = c_{1} \\), make \\( a=b \\), then \\( F(b) + F(a) = c_{2} \\)\n\\begin{bmatrix} 1 \u0026 1 \u0026 c_1 \\\\ 1 \u0026 1 \u0026 c_2 \\end{bmatrix}\nIt is easy to know the matrix is inconsistent.\ndifferent coefficient \\begin{bmatrix} t \u0026 1 \u0026 c_1 \\\\ 1 \u0026 t \u0026 c_2 \\end{bmatrix}\nIt is consistent.\nhow long the transformation return to example \\[ x \\to \\frac{x-1}{x} \\to - \\frac{1}{x-1} \\]\n\\[ \\frac{x-1}{x} \\to - \\frac{1}{x-1} \\to x \\]\nIt is easy to notice that it construct a loop.\nextended idea Let’s consider \\( x_{i} (i \\in R) \\) as one variable in the function. And \\( x_{i} \\ne x_{j} (i, j \\in R, i \\ne j) \\)\nIf you have only 2 equation, then you should write the tranformation down.\n\\[ x_1 \\to x_a \\to \\dots \\to x_2 \\]\n\\[ x_2 \\to x_b \\to \\dots \\to x_1 \\]\nYou will find the specific solution.\nquestion What if there are other loops?\nYes, it is possible and tricky. However, there is only one loop, if we are going to find the specific function. Because there is only one solution.",
    "description": "Example Let \\(F(x)\\) be defined for all real numbers except at \\(x=0\\) and \\(x=1\\), and satisfy the equation \\(F(x) + F( \\frac{x-1}{x}) = 1+x \\). Find the function \\(F(x)\\)\nSolution \\begin{equation} \\label{eq:1} F(x) + F(\\frac{x-1}{x}) = 1+x \\end{equation}\nmake \\( x = \\frac{x-1}{x} \\), have\n\\begin{equation} \\label{eq:2} F(\\frac{x-1}{x}) +F(- \\frac{1}{x-1}) = \\frac{2x-1}{x} \\end{equation}\nmake \\( x = - \\frac{1}{x-1} \\) in \\eqref{eq:2}, have\n\\begin{equation} \\label{eq:3} F(- \\frac{1}{x-1}) + F(x) = \\frac{x-2}{x-1} \\end{equation}",
    "tags": [
      "Math"
    ],
    "title": "finding specific function from the perspective of linear algebra",
    "uri": "/stem/finding_specific_function_from_the_perspective_of_linear_algebra/index.html"
  },
  {
    "breadcrumb": "My Personal Website \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Math",
    "uri": "/tags/math/index.html"
  },
  {
    "breadcrumb": "My Personal Website \u003e Cs_learns",
    "content": "Intro university: MIT prerequisite: master at least one programming language. programming languages: JavaScript/HTML/CSS/NoSQL difficulty: 3 estimated study time: … Resource website: https://weblab.mit.edu/schedule video: refer to the website materials: https://github.com/weblab-workshops workshop: https://github.com/weblab-workshops/catbook-react homework: https://weblab.is/hwn",
    "description": "Intro university: MIT prerequisite: master at least one programming language. programming languages: JavaScript/HTML/CSS/NoSQL difficulty: 3 estimated study time: … Resource website: https://weblab.mit.edu/schedule video: refer to the website materials: https://github.com/weblab-workshops workshop: https://github.com/weblab-workshops/catbook-react homework: https://weblab.is/hwn",
    "tags": [],
    "title": "MIT Web Development Crash Course",
    "uri": "/cs_learn/web-develop-crash-course/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "My Personal Website",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "My Personal Website",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Stems",
    "uri": "/stem/index.html"
  },
  {
    "breadcrumb": "My Personal Website",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "My Personal Website \u003e Cs_learns",
    "content": "Intro university: UC Berkeley prerequisite: None programming languages: python difficulty: 2 estimated study time: 32h Resource website: https://www.data8.org/ video: refer to the website materials: get official public materials here",
    "description": "Intro university: UC Berkeley prerequisite: None programming languages: python difficulty: 2 estimated study time: 32h Resource website: https://www.data8.org/ video: refer to the website materials: get official public materials here",
    "tags": [],
    "title": "UCB Data 8: Foundations of Data Science",
    "uri": "/cs_learn/data8/index.html"
  }
]
