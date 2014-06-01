## colorvert

A simple nodejs+Express JSON API for handling color conversions. It wraps Little CMS's transicc command line utility to do ICC Profile-based conversions between colorspaces, and fills the gaps with other math-based conversion functions, to provide a comprehensive conversion utility that you can just feed your color into, and it'll convert it to **all** the other color spaces and return the results in JSON format.

The goal is to create a more accurate, comprehensive, open, and usable tool for performing color conversions on and for the web.

Currently under heavy development, do not use in production yet. I'll update the docs and post the API to a domain once it's ready, then you'll know you can use it on your own server or in your local environment to batch convert colors.
