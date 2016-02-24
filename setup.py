# -*- coding: utf-8 -*-
from distutils.core import setup
from setuptools import find_packages

setup(
    name='django-tinymce-figuretag',
    version='0.0.1',
    author=u'Rick Taylor',
    author_email='rick.taylor@york.ac.uk',
    packages=find_packages(),
    include_package_data=True,
    url='https://github.com/ricktaylord/django-tinymce-figure',
    description='TinyMCE plugin for creating figure tags',
    zip_safe=False,
)
