# Project: Is my SMS a spam?
this simple and basic project will classify your SMS text of 160 characters or less as Spam or ham and tell you the probability of the class.
# List of used technologies
<nav>
<ol>1.- Python 2.7.12 </ol>
<ol>2.- VirtualEnv 15.0.1 </ol>
<ol>3.- Flask 0.12.2</ol>
<ol>4.- Scikit-learning 0.18.1</ol>
<ol>5.- NLTK 3.2.4</ol>
</nav>
This is running in ubuntu 14.04 y PyCharm community as IDE

# DataSet
the used dataset for this project was : http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/

# Model
i chose the bernoulli naive bayes above SVM ( linear and RBF kernel ), Multinomial naive bayes and knn classifier ( 5 <= K <= 12 ). i get 98,5% of accuracy

# Reference
I readed the follow papers to know about the project.
<nav>
<ol>1.-<i>The Impact of featuress extraction and selection on SMS Spam Filtering</i> ( 2013 ) by Uysal Alper Kürsat and Guanl Serkan</ol>
<ol>2.-<i>SMS Spam filtering: Methods and data</i> ( 2013 ) by Delany Sarah and Greene Derek</ol>
<ol>3.-<i>A review on mobile SMS spam filtering techniques</i> ( 2017 )by Latiff, Muhammad Shafie Abd, et al.</ol>
<ol>4.-<i>Contributions to the Study of SMS Spam Filtering: New Collection and Results</i> ( 2011 ) by Almeida, T.A., Gómez Hidalgo, J.M., Yamakami, A</ol>
</nav>

#Text processing
i mapped the url , phone number , and cash segmentation in Direccion , Number and Dinero word respectively; then all text to lowercase and remove all stop words.
To represent the text using tf-idf with max-features: 100 and n-gram = (1,2) and minimum frequency is 0.01%

# Future Work
i would like to implement the Relevance Vector machine(RVM) to comparate with my model and prove if RVM is outperformance of Bernoulli Naive bayes.
