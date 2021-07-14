package com.pu10g.biography.model.rss;

import com.pu10g.biography.component.LocalDateTimeXmlAdapter;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import java.time.LocalDateTime;
import java.util.List;

/**
 * RSSのモデルクラス
 */
public class Rss {

  public Channel channel;

  @Data
  @XmlAccessorType(XmlAccessType.PROPERTY)
  public static class Channel {
    private String title;
    private String link;
    private List<Item> item;

    public void setLink(String link) {
      // @todo remove replace function
      this.link = link.replaceAll("^http://", "https://");
    }

    @Data
    @XmlAccessorType(XmlAccessType.PROPERTY)
    public static class Item {
      private String title;
      private String link;
      // @todo remove getter and setter annotation
      @XmlJavaTypeAdapter(LocalDateTimeXmlAdapter.class)
      @Getter(AccessLevel.NONE)
      @Setter(AccessLevel.NONE)
      public LocalDateTime pubDate;

      public void setLink(String link) {
        // @todo remove replace function
        this.link = link.replaceAll("^http://", "https://");
      }
    }
  }
}
