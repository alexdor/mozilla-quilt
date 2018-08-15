import * as React from "react";
import Divider from "../../../components/Divider";
import FAQComponent from "../../../components/FAQComponent";
import "../../../styles/faq.css";

export default class Projects extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <section className="container mb-5 faq-container">
        <h2 className="py-4  faq-title">Frequently Asked Questions</h2>
        <div className="p-4">
          <FAQComponent
            question="What is the Internet Health Report?"
            text="The Internet Health Report is Mozilla’s open source initiative to document and explain what’s happening to the health of the Internet. It is comprised of a compilation of research that explains what’s helping and what’s hurting the Internet across five issues, from personal experience to global concerns. You can view the 2018 report here: http://mzl.la/ihr"
          />

          <Divider />
          <FAQComponent
            question="What is the Internet Health Report Quilt?"
            text="The Internet Health Report Quilt is a joint collaboration between Mozilla Internet Health Report and Mozilla Innovation teams. After launching the 2018 Internet Health Report in April, we've been excited to continue building the movement towards a healthier internet. This quilt allows our community around the world to tell us what they are doing locally and which issues they care about, as well as how they are contributing to solving those issues."
          />

          <Divider />
          <FAQComponent
            question="Why did we build this quilt? What happens to the stories here?"
            text="We built this quilt to show off all the ways people were contributing to a health internet around the world! We are only able to list a select few in our annual report so we wanted a way to capture and share the many more stories and celebrate the contribution of others. Our teams cannot wait to read the responses and with your permission, share some of them in our Internet Health Report storytelling over the next year."
          />

          <Divider />
          <FAQComponent
            question="What are the different categories or issue areas? Which one should I select."
            text="Mozilla's Internet Health Report is divided into five categories: Decentralization, Digital Inclusion, Openness, Privacy and Security, and Web Literacy. View descriptions of each issues here: https://internethealthreport.org/2018/issues/ The five issues of this report represent the range of things that matter to making the Internet healthier. They overlap and connect, as things do in our networked world. Sometimes our work fits into many of the issue areas. If you are having difficulty deciding, pick the issue that you think best represents what you are working on. There are no wrong selections!"
          />

          <Divider />
          <FAQComponent
            question="My location is not represented?"
            text="If you don't see any stories in your country than we encourage you to be the first to add. Simply follow the steps to submit a story and select your country when prompted. If you are having trouble inputting your location please get in touch and let us know."
          />
          <Divider />
          <FAQComponent
            question="What if I find content that is false or inaccurate?"
            text="If you see any information that is not accurate please let us know so we can flag it for further review. Email us at internethealth@mozillafoundation.org"
          />

          <Divider />
          <FAQComponent
            question="Who do I reach out to if I have any questions?"
            text="If you have any questions or concerns about the content on the quilt, please don't hesitate to reach out: internethealth@mozillafoundation.org"
          />
        </div>
      </section>
    );
  }
}
