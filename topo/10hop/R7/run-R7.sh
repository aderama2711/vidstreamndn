sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.21
nfdc face create udp://10.0.0.26
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-R7.conf