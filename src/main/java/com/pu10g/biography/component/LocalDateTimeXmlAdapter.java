package com.pu10g.biography.component;

import javax.xml.bind.annotation.adapters.XmlAdapter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

/**
 * XMLのシリアライズとデシリアライズ用のアダプタ
 * {@link String} と {@link LocalDateTime} を相互変換する
 */
public class LocalDateTimeXmlAdapter extends XmlAdapter<String, LocalDateTime> {
  /**
   * 文字列を {@link LocalDateTime} に変換する
   * @param localDateTimeStr <code>Sun, 28 Feb 2021 15:10:23 +0000</code> のような文字列
   * @return パースした結果
   */
  public LocalDateTime unmarshal(String localDateTimeStr) {
    return LocalDateTime.parse(
      localDateTimeStr,
      DateTimeFormatter.ofPattern("EEE, dd MMM yyyy HH:mm:ss Z", Locale.ENGLISH)
    );
  }

  /**
   * {@link LocalDateTime} を文字列に変換する
   * @param localDateTime 文字列に変換する対象の {@link LocalDateTime}
   * @return {@link DateTimeFormatter#ISO_LOCAL_DATE_TIME} フォーマットで変換した結果
   */
  public String marshal(LocalDateTime localDateTime) {
    return localDateTime.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
  }
}
