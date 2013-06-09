require "pandoc-ruby"

class Ruhoh

  module Converter

    module Markdown

      def self.extensions
        ['.md', '.markdown']
      end #self.extensions

      def self.convert(content)
	converter = PandocRuby.new(content).to_html(:smart,:mathjax,:email_obfuscation => :javascript)        
        converter
      end #self.convert

    end # Markdown

    module Textile
      
      def self.extensions
        ['.textile']
      end #self.extensions

      def self.convert(content)
        converter = PandocRuby.new(content).to_html(:smart,:mathjax,:'email-obfuscation' => :javascript)
        converter
      end #self.convert

    end # Textile
    
    module RST

      def self.extensions
        ['.rst']
      end #self.extensions

      def self.convert(content)
        converter = PandocRuby.new(content).to_html(:smart,:mathjax,:'email-obfuscation' => :javascript)
        converter
      end #self.convert

    end # RST

    module Html
      def self.extensions
        ['.htm', '.html']
      end
      def self.convert(content)
        content
      end 
    end # Html


  end # Converter
  

end # Ruhoh
